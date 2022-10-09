import styled from "styled-components";

export const PageContentContainer = styled.div`
    max-width: 46rem;
    margin: 0 auto;
    margin-top: 4rem;

    header{
        display: flex;
        justify-content: space-between;

        p{
            
            font-weight: 700;
            display: flex;
            align-items: center;

            span{
                background: var(--gray-400);
                margin-left: 0.5rem;
                font-size: 0.75rem;
                color: var(--gray-200);
                padding: 0.125rem 0.5rem;
                border-radius: 999px;
            }
        }

        
    }
`