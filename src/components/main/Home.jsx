import React from 'react';
import {Personal } from "../pages/Personal";
import {About} from "../pages/About";
import {Services} from "../pages/Services";
import { Portfolio } from '../pages/Protfolio';
import { Testimonials } from '../pages/Testimonials';
import { Counter } from '../pages/Counter';
import { Blog } from '../pages/Blog';
import { Contact } from '../pages/Contact';



export const Home = () =>
{
    return (
        <>

        <Personal />
        <About />
        <Services />
        <Counter />
        <Portfolio />
        <Testimonials />
        <Blog />
        <Contact />
        </>
    );
}