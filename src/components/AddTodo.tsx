import React, { FormEvent, useState } from 'react'
import styled from 'styled-components'

interface Props {
    newToDo(text: string): void
}

export const AddTodo = (props: Props) => {

    const [currentState, setState] = useState<string>('')

    const handleSubmit = (event: FormEvent) => {
        if (currentState !== '') {
            event.preventDefault()
            props.newToDo(currentState)
            setState(() => '')
        }
    }

    return(
        <Wrapper>
            <div>
                <input
                    value={currentState}
                    onChange={event => setState(event.target.value)}
                />
                <Button onClick={handleSubmit}>
                    +
                </Button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  background-color: darkcyan;
  border-radius: 5px;
  border-top: solid 5px darkslategrey;
  margin-top: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  input{
    background-color:  #88cdc9;
    font-size: large;
    font-family: "Comic Sans MS";
  }
`

const Button = styled.button`
  margin-left: 20px;
  font-size: x-large;
  background-color: white;
  border-radius: 12px;
  :hover{
    cursor: pointer;
    background-color: darkslategrey;
    color: white;
  }
`
