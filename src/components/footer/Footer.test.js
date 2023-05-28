/* eslint-disable testing-library/no-wait-for-side-effects */
/* eslint-disable testing-library/no-debugging-utils */
import {render, screen,waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Footer from './Footer'

describe ('Footer component',() => {
  beforeEach(() => {
  
  });
  it('should render the componet',() => {
    render(<Footer />)
    const title = screen.getByText(/Desarrollado por Juan Sanchez/i)
 
    expect(title).toBeInTheDocument()

  })
  // it('should navigate to link when the link are clicked',async () => {    
  //   const originalLocation = window.location;
  //   delete window.location;
  //   window.location = { href: '' };

  //   Object.defineProperty(window, 'location', {
  //     writable: true,
  //     value: { href: '' },
  //   });

  //   render(  <Footer /> )
    
  //   const RepoLink = screen.getByText(/codigo del proyecto/i);
  //   expect(RepoLink).toHaveAttribute('href', 'https://github.com/JSSatorres/testing-library-React');
  //   expect(RepoLink).toHaveTextContent('Codigo del proyecto');

  //   await waitFor(()=>{
  //     userEvent.click(RepoLink)
  //   })
  //   screen.debug()
  //   expect(window.location.href).toBe('https://github.com/JSSatorres/testing-library-React');
  //   window.location = originalLocation;  // })
  
})