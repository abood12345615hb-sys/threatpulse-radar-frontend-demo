// MOCK SUPABASE CLIENT FOR FRONTEND-ONLY DEMO

const mockQuery = {
  select: () => mockQuery,
  eq: () => mockQuery,
  order: () => mockQuery,
  limit: () => mockQuery,
  maybeSingle: async () => ({ data: null, error: null }),
  single: async () => ({ data: null, error: null }),
  insert: async () => ({ data: null, error: null }),
  delete: () => mockQuery,
  then: (resolve: any) => resolve({ data: null, error: null })
};

const mockChannel = {
  on: () => mockChannel,
  subscribe: () => mockChannel
};

export const supabase = {
  auth: {
    getSession: async () => ({ data: { session: null }, error: null }),
    signInWithPassword: async () => ({ data: { user: { id: "mock_user" }, session: {} }, error: null }),
    signUp: async () => ({ data: { user: { id: "mock_user", identities: [{}] }, session: {} }, error: null }),
    signOut: async () => ({ error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
  },
  from: (table: string) => mockQuery,
  rpc: async (fn: string, params: any) => ({ data: null, error: null }),
  channel: (name: string) => mockChannel,
  removeChannel: (channel: any) => {}
} as any;
