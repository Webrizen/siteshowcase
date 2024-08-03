import { model, models, Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  subscription: {
    status: 'free' | 'paid';
    plan: 'basic' | 'premium' | 'enterprise';
    expiryDate: Date;
  };
  credits: {
    allowed: number;
    used: number;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    subscription: {
      status: { type: String, enum: ['free', 'paid'], default: 'free' },
      plan: { type: String, enum: ['basic', 'premium', 'enterprise'], default: 'basic' },
      expiryDate: { type: Date, default: null },
    },
    credits: {
      allowed: { type: Number, default: 5 },
      used: { type: Number, default: 0 },
    },
  },
  {
    timestamps: true,
    toJSON: {
      versionKey: false,
      virtuals: true,
      transform: (_, ret) => {
        delete ret._id;
        delete ret.password;
      },
    },
  }
);

const User = models.User || model<IUser>('User', UserSchema);

export default User;