import React from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
  }
  from 'mdb-react-ui-kit';

function LoginForm() {
  return (
    <MDBContainer fluid className='p-4'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            Gratitude <br />
            
            <span className="text-primary">Already a Member?</span>
          </h1>



          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
            Log in to your account so that you may join the world of opportunities!
          </p>

        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>

              

                

              <MDBInput wrapperClass='mb-4'autoComplete="off" label='Email' id='form1' type='email'/>
              <MDBInput wrapperClass='mb-4' autoComplete="off" label='Password' id='form1' type='password'/>
              <MDBInput wrapperClass='mb-4' autoComplete="off" label='Confirm Password' id='form1' type='password'/>

             

              <MDBBtn className='w-100 mb-4' size='md'>Log in</MDBBtn>

              <div className="text-center">

                <p>or Log in with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  )
}

export default LoginForm