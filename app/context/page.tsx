import React from 'react';

async function getData() {
  const res = await fetch('https://api.sampleapis.com/coffee/iced');
  return res.json();
}

const page = async () => {
  const res = await getData();

  return (
    <div>
      page
      <br />
      {JSON.stringify(res)}
    </div>
  );
};

export default page;
