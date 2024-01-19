import { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function PageNotFound() {    
    // Optionally, you can return some content to display while the redirect is in progress
    redirect("/dashboard/homepage");
    return <div>Redirecting...</div>;
}