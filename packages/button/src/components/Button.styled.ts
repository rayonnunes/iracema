import styled from 'styled-components'

export const Button = styled.button`
    background: white;
    border: 0.2rem solid black;
    border-radius: 0.25em;
    padding: 0.25rem 1rem;
    box-shadow: 0.25rem 0.25rem black;

    transition: background-color 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        background-color: #f5f5f5; /* Light gray background on hover */
    }

    &:active {
        background-color: #ddd;
        box-shadow: 0.1rem 0.1rem black;
        transform: translateY(1px); /* Push the button down a bit on click */
    }
`;