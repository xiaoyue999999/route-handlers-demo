'use client';

import React, { useEffect, useState } from 'react';

export default function UserClient() {
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<Record<string, any>>([]);

  const getUserInfo = async () => {
    try {
      setLoading(true);
      const result = await fetch('https://jsonplaceholder.typicode.com/users');

      const data = await result.json();
      console.log('data', data);

      setUserInfo(data);

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log('err', err);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  if (loading) return <h1>Loading....</h1>;

  return (
    <>
      <h1>UserClient</h1>
      {userInfo.map(
        (res: { id: string; name: string; phone: string; username: string; website: string }) => (
          <div className="m-3 border" key={res.id}>
            <div>{res.name}</div>
            <div>{res.phone}</div>
            <div>{res.username}</div>
            <div>{res.website}</div>
          </div>
        )
      )}
    </>
  );
}
