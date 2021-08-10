import React, { useState } from 'react'
import { AddTodo } from './AddTodo'
import styled from 'styled-components'
import { ToDoListElement } from './ToDoListElement'

export const ToDoWrapper = () => {

    const[currentState, setState] = useState<Array<string>>([])

    const addToDo = (text: string) => {

        if (!currentState.includes(text)) {
            setState(prevState => prevState.concat(text))
        }
    }

    const removeToDo = (text: string) => {
        setState(prevState => prevState.filter(todo => todo !== text))
    }

    return(
        <Wrapper>
            To Do List
            <AddTodo newToDo={addToDo} />
            <ul>
                {currentState.map((todo, index) => (
                    <ToDoListElement
                        key={`${index}-${todo}`}
                        text={todo}
                        remove={removeToDo}
                    />
                ))}
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  background-color: cadetblue;
  text-align: center;
  box-sizing: border-box;
  padding: 2% 8% 2% 8%;
  font-size: xx-large;
  font-family: Lato;
  display: flex;
  flex-direction: column;
  height: 100vh;
`