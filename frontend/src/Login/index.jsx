import React from 'react'
import './style.scss' ;
import { Card, CardBody, CardFooter, CardHeader, FormGroup, FormLabel, FormControl, Container, Col, Row} from 'react-bootstrap';

const Login = () => {
    const isLoggedIn = useIsLoggedIn();

    const {state} = useLocation();
    const navigate = useNavigate();
    const {makeRequest: loginRequest} = useApi(ENDPOINTS.USER.LOGIN, REQUEST_TYPES.POST) ; 
    const { makeRequest: resetPasswordRequest } = useApi(ENDPOINTS.USER.RESET_PASSWORD, REQUEST_TYPES.PATCH);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");

    const [showResetForm, setShowResetForm] = useState(false);


    const onLogin = async () => {
        const payload = { username, password };
        // const response = await axiosInstance.post(ENDPOINTS.USER.LOGIN, payload);
        await loginRequest(payload);
        setPassword('')
        setUsername('')
    }

    const onResetPassword = async () => {
        const payload = { username, otp, newPassword: password };
        await resetPasswordRequest(payload, { updateUser: false });
        setShowResetForm(false);
        setPassword('')
        setUsername('')
        setOtp('')
    }

    useEffect(() => {
        if (isLoggedIn && state) {
            console.log("🚀 ~ Login ~ state:", state)
            navigate(state, { replace: true })

        }
    }, [isLoggedIn, state])

    const isValid = username && password;


  return (
    <>
    <Container fluid>
        <Row>
            <Col sm={{span: 10, offset: 1}} md= {{span: 6, offset: 3}} lg= {{span: 4, offset: 4}}>
                <Card className='login-card mt-5'>
                    <CardHeader>Login </CardHeader>
                    <CardBody>
                        <FormGroup controlId= 'username' className='mb-3'>
                            <FormLabel>Username</FormLabel>
                            <FormControl placeholder="Enter username" /> 
                        </FormGroup>

                        <FormGroup controlId= 'password' className='mb-3'>
                            <FormLabel>Password</FormLabel>
                            <FormControl type="password" placeholder="Enter password" /> 
                        </FormGroup>
                    </CardBody>
                    <CardFooter>
                        <button>Login</button>
                    </CardFooter>
                </Card>
            </Col>
        </Row>
    </Container>
        
        
    </>
  )
}

export default Login