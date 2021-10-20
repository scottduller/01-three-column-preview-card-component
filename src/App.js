import { ThemeProvider } from 'styled-components';
import { theme } from './components/shared/theme';
import { Wrapper } from './components/shared/SharedElements';
import Attribution from './components/Attribution';
import Cards from './components/Cards';
import GlobalStyles from './components/shared/Global';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Wrapper>
				<Cards />
				<Attribution />
			</Wrapper>
		</ThemeProvider>
	);
}

export default App;
