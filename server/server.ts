import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { load } from 'cheerio';
import { isValidUrl } from './utils';

const app = express();
const port = 3001;

app.use(cors());

app.get('/api/meta', async (req, res) => {
  try {
    const { url } = req.query;

    if (typeof url !== 'string') {
      return res.status(400).json({ error: 'URL must be a string' });
    }

    if (!isValidUrl(url)) {
      return res.status(400).json({ error: 'URL is invalid' });
    }

    const { data } = await axios.get(url);
    const $ = load(data);

    const title = $('title').text() || null;
    const image = $('meta[property="og:image"]').attr('content') || null;
    const description =
      $('meta[property="og:description"]').attr('content') || null;

    res.json({ title, image, description });
  } catch (error) {
    console.error('Error fetching URL preview:', error);
    res.status(500).json({ error: 'Failed to fetch URL preview' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
