import { APIEmbed, FileOptions } from 'discord.js';


export interface MessageData {
    username: string;
    avatar?: string;
    content?: string;
    embeds?: APIEmbed[];
    files?: FileOptions;
    pinned?: boolean;
    sentAt: string;
}