import { MailModule } from "../modules/mail/MailModule";
import { DriveModule } from "../modules/drive/DriveModule";
import { VaultModule } from "../modules/vault/VaultModule";
import { ChatModule } from "../modules/chat/ChatModule";
import { IdentityModule } from "../modules/id/IdentityModule";
import { AIGuardianModule } from "../modules/ai/AIGuardianModule";

export interface DashboardModule {
  id: string;
  label: string;
  description: string;
}

export const MODULES: DashboardModule[] = [
  MailModule,
  DriveModule,
  VaultModule,
  ChatModule,
  IdentityModule,
  AIGuardianModule
];
