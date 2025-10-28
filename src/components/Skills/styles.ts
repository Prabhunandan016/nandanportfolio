import styled from "styled-components";

export const Container = styled.section`
  margin-top: 8rem;
  text-align: center;

  h2 {
    color: #fff;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    justify-items: center;
    align-items: start;
  }

  .skill {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-8px);
    }

    img {
      width: 6rem;
      height: 6rem;
      object-fit: contain;
      margin-bottom: 1rem; /* ensures name appears clearly below image */
      transition: transform 0.3s ease;
    }

    span {
      font-size: 1.5rem;
      font-weight: 500;
      color: #e5e5e5; /* brighter text for visibility */
      text-transform: capitalize;
      line-height: 1.2;
      margin-top: 0.5rem;
      display: block;
    }
  }

  /* Responsive design */
  @media (max-width: 1024px) {
    .skills-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }

    img {
      width: 4rem;
      height: 4rem;
    }

    span {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 480px) {
    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.8rem;
    }

    h2 {
      font-size: 2.4rem;
    }

    img {
      width: 3.8rem;
      height: 3.8rem;
    }

    span {
      font-size: 1.2rem;
    }
  }
`;
