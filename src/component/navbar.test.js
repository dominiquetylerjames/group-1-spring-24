import {render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Navbar from './Navbar'
import {BrowserRouter as Router} from "react-router-dom"
import { createMemoryHistory } from 'history'
import RoutesConfig from './RoutesConfig' /* This was added as part of getting the stats test to pass, kept in just in case */

describe('Navbar', () => {

    // Page loads and shows Navbar
    test('loads and displays navbar', () => {
        // ARRANGE
        render(
            <Router>
                <Navbar />
            </Router>)

        // ACT
        const navbar = screen.getByRole('navigation')

        // ASSERT
        expect(navbar).toHaveTextContent('Home')
    })

    // On clicking the shield logo, set routing to '/'
    test('sets routing to / for homepage by clicking the shield', () => {
        const history = createMemoryHistory();

        // ARRANGE
        render(
            <Router history = {history}>
                <Navbar />
            </Router>)
        
        // ACT
        fireEvent.click(screen.getByRole('img'));

        // ASSERT
        expect(history.location.pathname).toBe('/');
    })

    // On clicking the Home link, set routing to '/'
    test('sets routing to / for homepage by clicking Home', () => {
        const history = createMemoryHistory();

        // ARRANGE
        render(
            <Router history = {history}>
                <Navbar />
            </Router>)
        
        // ACT
        fireEvent.click(screen.getByText('Home'));

        // ASSERT
        expect(history.location.pathname).toBe('/');
    })

        // // On clicking the Home link, set routing to '/'
        // test('sets routing to /stats for the stats page by clicking Stats', () => {
        //     const history = createMemoryHistory();
    
        //     // ARRANGE
        //     render(
        //         <Router history = {history}>
        //             <Navbar />
        //             <RoutesConfig />
        //         </Router>)
            
        //     // ACT
        //     let link = screen.getByText('Stats')
        //     fireEvent.click(link);
    
        //     // ASSERT
        //     expect(history.location.pathname).toBe('/stats');
        // })
});
