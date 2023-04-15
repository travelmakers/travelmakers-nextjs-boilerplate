'use client';

import { DehydratedState, Hydrate } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

interface Props {
  dehydratedState: DehydratedState;
}

const HydrateOnClient = ({
  dehydratedState,
  children,
}: PropsWithChildren<Props>) => (
  <Hydrate state={dehydratedState}>{children}</Hydrate>
);

export default HydrateOnClient;
