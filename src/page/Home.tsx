import * as React from 'react';
import { Redirect } from 'react-router-dom';

export default function Home() {
  return (
    <Redirect to="/rooms" />
  );
}