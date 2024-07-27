import { z } from 'zod'

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 Characters')
    .max(50, 'Name must be at most 50 Characters'),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), 'Invalid Phone Number'),
})

export const PatientFormValidation = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 Characters')
    .max(50, 'Name must be at most 50 Characters'),
  email: z.string().email('Invalid Email Address'),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), 'Invalid phone number'),
  birthDate: z.coerce.date(),
  gender: z.enum(['Male', 'Female', 'Others']),
  address: z
    .string()
    .min(5, 'Address must be at least 5 characters')
    .max(500, 'Address must be at most 500 characters'),
  occupation: z
    .string()
    .min(2, 'occupation must be at least 2 characters')
    .max(500, 'occupation must be at most 500 characters'),
  emergencyContactName: z
    .string()
    .min(2, 'Emergency Contact Name must be at least 2 characters')
    .max(50, 'Emergency Contact Name must be at least 50 characters'),
  emergencyContactNumber: z
    .string()
    .refine(
      (emergencyContactNumber) => /^\+\d{10,15}$/.test(emergencyContactNumber),
      'Invalid phone number'
    ),
  primaryPhysician: z
    .string()
    .min(2, 'Primary Physicain must be at least 2 characters'),
  insauranceProvider: z
    .string()
    .min(2, 'Insaurance Name must be at least 2 characters')
    .max(50, 'Insaurance Name must be at most 50 characters'),
  insaurancePolicyNumber: z
    .string()
    .min(2, 'Policy Number must be at least 2 characters')
    .max(50, 'Policy Number must be at most 50 characters'),
  allergies: z.string().optional(),
  currentMedication: z.string().optional(),
  familyMedicalHistory: z.string().optional(),
  pastMedicalHistory: z.string().optional(),
  identificationType: z.string().optional(),
  identificationNumber: z.string().optional(),
  identificationDocument: z.custom<File[]>().optional(),
  treatmentConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: 'You must consent to treatment in order to proceed',
    }),
  disclosureConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: 'You must consent to disclosure in order to proceed',
    }),
  privacyConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: ' You must consent to privacy in order to proceed',
    }),
})
