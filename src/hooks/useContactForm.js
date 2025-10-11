import { useState } from 'react';

export function useContactForm() {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data) => {
    setIsLoading(true);
    
    try {
      // Option 1: Send to your backend API
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      //
      // if (!response.ok) throw new Error('Failed to send request');
      // const result = await response.json();
      // setMessage(`Request sent! Reference: ${result.id}`);
      // return true;

      // Option 2: Store in sessionStorage (client-side)
      const requests = JSON.parse(sessionStorage.getItem('requests') || '[]');
      const newRequest = {
        ...data,
        id: Date.now(),
        ts: new Date().toISOString(),
      };
      requests.unshift(newRequest);
      sessionStorage.setItem('requests', JSON.stringify(requests));

      // Log to console for demo purposes
      console.log('Request saved:', newRequest);

      setMessage(`Request saved! I will contact you at ${data.email}`);
      setIsLoading(false);
      return true;
    } catch (err) {
      console.error('Error saving request:', err);
      setMessage('Error saving request. Please email hello@pixelandcode.ke');
      setIsLoading(false);
      return false;
    }
  };

  return { handleSubmit, message, setMessage, isLoading };
}