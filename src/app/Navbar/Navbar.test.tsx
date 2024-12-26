import React from 'react'
import {render, screen} from '@testing-library/react';
import { Navbar } from './Navbar';

it('shows About, Portfolio, and Contact Me in the Navbar', () => {

  render(<Navbar />)

  console.log({screen})

 expect(screen.getByText('About')).toBeInTheDocument();
  expect(screen.getByText('Portfolio')).toBeInTheDocument();
  expect(screen.getByText('Contact Me')).toBeInTheDocument();
})