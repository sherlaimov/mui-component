import React from 'react';

export default function DialogContent({ top, children }) {
  return <section className={`dialog-content ${top ? 'top' : ''}`}>{children}</section>;
}
