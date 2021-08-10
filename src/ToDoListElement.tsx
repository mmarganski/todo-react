import React from 'react'
import styled from 'styled-components'

interface Props {
    text: string,
    remove(text: string): void
}

export const ToDoListElement = (props: Props) => {

    const remove = () => {
        props.remove(props.text)
    }

    return(
        <Wrapper>
            <ToDoText>
                {props.text}
            </ToDoText>
            <RemoveButton onClick={remove}>
                —
            </RemoveButton>
        </Wrapper>
    )
}

const Wrapper = styled.li`
  background-color: darkslategrey;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: 1% 5% 0 5%;
  font-family: Consolas;
  font-size: large;
  color: white;
  box-sizing: border-box;
`

const ToDoText = styled.p`
  margin-left: 10%;
  margin-right: 5%;
  text-align: left;
`

const RemoveButton = styled.button`
  margin-right: 10%;
  align-items: end;
  justify-content: end;
  font-size: x-large;
  background-color: white;
  color: darkslategrey;
  border-radius: 50px;
  padding: 5px;
  :hover{
    cursor: pointer;
    background-color: darkslategrey;
    color: white;
  }
`