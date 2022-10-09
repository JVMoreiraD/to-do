import styled from "styled-components";

export const NewTaskContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0rem;
    gap: 0.5rem;

    position: absolute;
    width: 46rem;
    height: 3.375rem;
    left: calc(50% - 46rem/2);
    top: 10.813rem;

    button{
        /* Auto layout */
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        gap: 0.5rem;
        color: var(--gray-100);

        /* Blue Dark */
        border-color: var(--blue);
        background: var(--blue-dark);
        border-radius: 8px;
        /* Inside auto layout */
        cursor: pointer;
        flex: none;
        order: 1;
        flex-grow: 0;
    }
    textarea{
        box-sizing: border-box;
        resize: none;

        /* Auto layout */

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem;
        gap: 0.5rem;

        width: 39.875rem;
        height: 3.375rem;

        /* Gray 500 */

        background: #262626;
        /* Gray 700 */

        border: 0.063rem solid #0D0D0D;
        border-radius: 8px;

        /* Inside auto layout */

        flex: none;
        order: 0;
        flex-grow: 1;
    }
`