import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import { createReadStream } from 'fs';
import crypto from 'crypto';

import appSrc from './app.js';
const app = appSrc(express, bodyParser, createReadStream, crypto, http);

const PORT = process.env.PORT || 4321;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
