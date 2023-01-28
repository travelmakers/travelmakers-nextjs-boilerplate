/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
const handler = async (
  req: { query: { secret: string | undefined } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { message: string }): any; new (): any };
      send: { (arg0: string): any; new (): any };
    };
    revalidate: (arg0: string) => any;
    json: (arg0: { revalidated: boolean }) => any;
  }
) => {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.NEXT_PUBLIC_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    // This should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    await res.revalidate('/path-to-revalidate');
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating');
  }
};

export default handler;
