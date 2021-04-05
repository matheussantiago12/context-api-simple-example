import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px;

    form {
        display: flex;

        input, button {
            margin: 0;
            padding: 12px;
        }

        input {
            border: 1px solid gray;
            border-radius: 17px 0px 0px 17px;
        }

        button {
            border: 1px solid rgb(106, 65, 219);
            border-radius: 0px 17px 17px 0px;
            padding-left: 20px;
            padding-right: 20px;
            background-color: rgb(106, 65, 219);
            color: white;
        }
    }
`