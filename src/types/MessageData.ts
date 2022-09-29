import { EmbedBuilder } from 'discord.js';
import type { FileOptions } from 'discord.js';

export interface MessageData {
    username: string;
    avatar?: string;
    content?: string;
    embeds?: EmbedBuilder[];
    files?: FileOptions[];
    pinned?: boolean;
    sentAt: string;
}