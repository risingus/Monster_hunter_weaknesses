import {Form} from './components/form';
import {StyledButton} from './components/button';
import SearchIcon from '@material-ui/icons/Search';
import {StyledInput} from './components/input';
import {Title} from './components/title';


function App() {
  return (
    <>
    <Title>MHW <h1>Weakness</h1></Title>
    <Form>
      <StyledInput placeholder="Type monster name"/>
      <StyledButton startIcon={<SearchIcon/>}>Search</StyledButton>
    </Form>
    </>
  );
}

export default App;
