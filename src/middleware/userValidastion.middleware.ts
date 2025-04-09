// src/middleware/validation.middleware.ts

import { z, ZodError, ZodTypeAny } from "zod";
import { Request, Response, NextFunction } from "express";

export const validateData = (schema: ZodTypeAny) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      const parsed = schema.parse(req.body);
      req.body = parsed; 
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        }));

        res.status(400).json({
          error: "Validation failed",
          details: errorMessages,
        });
      } else {
        res.status(500).json({
          error: "Something went wrong while validating data",
        });
      }
    }
  };
};
