'use client';

import { IMypage } from '@/types/api.mypage';
import React from 'react';

interface Props {
  data: IMypage;
}
const Container: React.FC<Props> = ({ data }) => (
  <div>
    Container
    <br />
    <br />
    <div>user_name: {JSON.stringify(data.data.user_name)}</div>
  </div>
);

export default Container;
