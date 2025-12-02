import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
return (
<nav style={{ padding: 12, background: '#0f172a', color: 'white', display: 'flex', gap: 16, justifyContent: 'space-between' }}>
<div style={{ fontWeight: 700 }}>My Portfolio</div>
<div style={{ display: 'flex', gap: 12 }}>
<Link style={{ color: 'white', textDecoration: 'none' }} to='/'>Home</Link>
<Link style={{ color: 'white', textDecoration: 'none' }} to='/about'>About</Link>
<Link style={{ color: 'white', textDecoration: 'none' }} to='/skills'>Skills</Link>
<Link style={{ color: 'white', textDecoration: 'none' }} to='/projects'>Projects</Link>
<Link style={{ color: 'white', textDecoration: 'none' }} to='/contact'>Contact</Link>
</div>
</nav>
);
}