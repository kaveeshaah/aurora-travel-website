'use client';

import React from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const TestFirebase = () => {
  const testConnection = async () => {
    try {
      console.log('Testing Firebase connection...');
      console.log('Environment variables:', {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.substring(0, 10) + '...',
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
      });

      const testDoc = await addDoc(collection(db, 'test-collection'), {
        message: 'Test message',
        timestamp: Timestamp.now(),
        test: true
      });

      console.log('SUCCESS: Document written with ID: ', testDoc.id);
      alert('Firebase connection successful! Check console for details.');
    } catch (error) {
      console.error('FIREBASE ERROR:', error);
      alert('Firebase error: ' + error.message);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Firebase Connection Test</h1>
      <button
        onClick={testConnection}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Test Firebase Connection
      </button>
      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <p>Open browser console (F12) to see detailed logs</p>
        <p>This will test:</p>
        <ul>
          <li>Environment variables loading</li>
          <li>Firebase initialization</li>
          <li>Firestore write permissions</li>
        </ul>
      </div>
    </div>
  );
};

export default TestFirebase;