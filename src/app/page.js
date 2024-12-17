import { auth } from '@clerk/nextjs/server';
import { FetchInterval } from './fetch-interval';

export default async function Home() {
  const token = await auth().then((auth) => auth.getToken());
  const data = await fetch('http://localhost:3001/api/trpc/test', {
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => res.json());

  return (
    <>
      {data.test} <FetchInterval />
    </>
  );
}
