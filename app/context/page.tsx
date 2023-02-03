import React from 'react';

async function getData() {
  const res = await fetch('https://api.dnd.ac/organizers/');
  return res.json();
}

const page = async () => {
  const res = await getData();

  return (
    <div>
      <p>The locale: </p>
      <br />
      {JSON.stringify(res)}
    </div>
  );
};

export default page;
