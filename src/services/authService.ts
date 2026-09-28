import type { User } from "@/types";

export interface RegisterPayload {
  fullName: string;
  email: string;
  password: string;
  dialCode: string;
  phone: string;
  whatsappAlerts: boolean;
}

const MOCK_USER_KEY = "threatpulse_mock_user";

export const authService = {
  async current(): Promise<User | null> {
    if (typeof window === "undefined") return null;
    const user = localStorage.getItem(MOCK_USER_KEY);
    return user ? JSON.parse(user) : null;
  },

  async register(payload: RegisterPayload): Promise<User> {
    const fullPhone = `${payload.dialCode}${payload.phone}`;
    const user: User = {
      id: `usr_${Date.now()}`,
      fullName: payload.fullName,
      email: payload.email,
      phone: fullPhone,
      whatsappAlerts: payload.whatsappAlerts,
      role: "admin", // give admin role by default for demo
    };
    localStorage.setItem(MOCK_USER_KEY, JSON.stringify(user));
    return user;
  },

  async login(email: string, password: string): Promise<User> {
    const user: User = {
      id: `usr_demo`,
      fullName: email.split("@")[0] || "Demo Admin",
      email,
      phone: "+966500000000",
      whatsappAlerts: true,
      role: "admin", // give admin role by default for demo
    };
    localStorage.setItem(MOCK_USER_KEY, JSON.stringify(user));
    return user;
  },

  async logout(): Promise<void> {
    localStorage.removeItem(MOCK_USER_KEY);
  },
};

export const COUNTRY_CODES = [
  { code: "SA", dial: "+966", label: "Saudi Arabia" },
  { code: "AE", dial: "+971", label: "United Arab Emirates" },
  { code: "EG", dial: "+20", label: "Egypt" },
  { code: "YE", dial: "+967", label: "Yemen" },
  { code: "JO", dial: "+962", label: "Jordan" },
  { code: "US", dial: "+1", label: "United States" },
  { code: "GB", dial: "+44", label: "United Kingdom" },
  { code: "DE", dial: "+49", label: "Germany" },
];
