import { Box, Grid, GridItem } from '@chakra-ui/react'
import InputComponent from './components/InputComponent'
import OutputComponent from './components/OutputComponent'
import { useState } from 'react'

function App() {
  
  const [input, setInput] = useState("")
  const [outputValue, setOutputValue] = useState("")

  const encryptionKeys = {
      "e": "enter",
      "i": "imes",
      "a": "ai",
      "o": "ober",
      "u": "ufat"
  }

  function handleInputChange (event: React.ChangeEvent<HTMLTextAreaElement>) {
      let value = event.target.value
      setInput(value)
  }

  function encrypt() {
      let encryptedValue = input
      for (const key in encryptionKeys) {
        encryptedValue = encryptedValue
                          .split(key)
                          .join(
                            encryptionKeys
                              [key as keyof typeof encryptionKeys]
                            )
      }
      setOutputValue(encryptedValue)
      
  }

  function decrypt() {
      let decryptedValue = input
      for (const key in encryptionKeys) {
        decryptedValue = decryptedValue.split(encryptionKeys[key as keyof typeof encryptionKeys]).join(key)
      }
      setOutputValue(decryptedValue)
  }
  return (
      <Box>
          <Grid
              templateColumns={{lg: 'repeat(3, 1fr)'}}
              ms={{md: 48, base: 14}}
              me={{xl: 32, md: 32, base: 14}}
              my={16}
          >
              {/* Heading, Input and Buttons */}
              <GridItem colSpan={{xl: 2, base: 3}} me={{xl: 48}}>
                  <InputComponent 
                      onChange={handleInputChange}
                      onEncrypt={encrypt}
                      onDecrypt={decrypt}
                      input={input}
                  />
              </GridItem>

              {/* Encryption / Decryption result */}
              <GridItem justifyContent="center" colSpan={{xl: 1, base: 3}} mt={{xl: 0, base: 12}}>
                  <OutputComponent outputValue={outputValue} setInputValue={setInput} setOutputValue={setOutputValue}/>
              </GridItem>
          </Grid>
      </Box>
    )
}

export default App
