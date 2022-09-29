import { EmbedBuilder } from 'discord.js';
import { Buffer } from 'node:buffer';

export interface MessageData {
    username: string;
    avatar?: string;
    content?: string;
    embeds?: EmbedBuilder;
    files?: {
        name: string;
        description: string;
        attachment: string | Buffer;
    };
    pinned?: boolean;
    sentAt: string;
}