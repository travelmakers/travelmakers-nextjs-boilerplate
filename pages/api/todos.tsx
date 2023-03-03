import { withSentry } from '@sentry/nextjs';
import { NextApiRequest, NextApiResponse } from 'next';

const SIMPLE = [
  { id: 0, title: 'John Doe', completed: false },
  { id: 1, title: 'John Doe', completed: false },
  { id: 2, title: 'John Doe', completed: false },
  { id: 3, title: 'John Doe', completed: false },
];

export function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(SIMPLE);
}

export default withSentry(handler);
