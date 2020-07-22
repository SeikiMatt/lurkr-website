import styled from "styled-components";

export const Container = styled.div`
  padding-top: 47px;
`;

export const Input = styled.input`
  display: block;
  margin-right: auto;
  margin-left: auto;

  width: 40%;
  height: 40px;
  max-width: 601px;

  padding: 0 10px;
  border-radius: 7px;

  font-size: 17px;
  color: var(--white);
  background-color: var(--chat-input);

  ::-placeholder {
    color: var(--gray);
  }

  &:focus {
    outline: none;
  }
`;

export const EmojiContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > img {
    width: 3rem;
    height: 3rem;
    min-height: 3rem;

    border-radius: 3px;

    flex-shrink: 0;
  }

  > img + img {
    padding-left: 5px;
  }
`;
