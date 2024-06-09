import {render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'


describe('App', () => {

    // App successfully loads by checking for the App div, which contains all the content
    test('app successfully loads', () => {
        // ARRANGE
        render(<App />)

        // ACT
        const app = screen.getByTestId('app-div')

        // ASSERT
        expect(app).not.toBeNull()
    })
});

