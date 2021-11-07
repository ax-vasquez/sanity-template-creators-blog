import React from 'react'
import styled from 'styled-components'

const StyledModalField = styled.div`
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

const StyledModalFieldLabel = styled.div`
    margin-bottom: 0.5rem;
    text-align: center;
    & {
        h2 {
            font-weight: 200;
            font-size: 1.25rem;
            line-height: 1.75rem;
        }
    }
`

const ModalField = ({
    children,
    label,
}:{
    children: any
    label?: string
}) => {

    return (
        <StyledModalField>
            {label ? (
                <StyledModalFieldLabel>
                    <h2>
                        {label}
                    </h2>
                </StyledModalFieldLabel>
          )
            : null }
            {children}
        </StyledModalField>
    )
}

export default ModalField
