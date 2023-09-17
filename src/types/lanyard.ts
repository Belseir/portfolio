export const Opcodes = {
  Event: 0,
  Hello: 1,
  Initialize: 2,
  Heartbeat: 3,
} as const;

export interface SubscriptionData {
  subscribe_to_id: string;
}

export interface User {
  id: string;
  data?: LanyardData;
}

export interface LanyardData {
  kv: Kv;
  spotify: null;
  discord_user: DiscordUser;
  activities: Activity[];
  discord_status: string;
  active_on_discord_web: boolean;
  active_on_discord_desktop: boolean;
  active_on_discord_mobile: boolean;
  listening_to_spotify: boolean;
}

export interface Activity {
  id: string;
  name: string;
  type: number;
  state: string;
  details: string;
  timestamps: Timestamps;
  application_id: string;
  assets: Assets;
  created_at: number;
}

export interface Assets {
  large_image: string;
  large_text: string;
  small_image: string;
  small_text: string;
}

export interface Timestamps {
  start: number;
}

export interface DiscordUser {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  bot: boolean;
  global_name: string;
  display_name: string;
  public_flags: number;
  avatar_decoration_data: null;
}

export interface Kv {}
