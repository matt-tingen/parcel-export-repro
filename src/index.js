// `@chakra-ui/react` re-exports `@chakra-ui/system` which re-exports `@chakra-ui/color-mode`

// Repros when importing via `@chakra-ui/react`
// Repros when importing via `@chakra-ui/react` or `@chakra-ui/system`
import { ColorModeScript } from '@chakra-ui/react';
// import { ColorModeScript } from '@chakra-ui/system';

// Works as expected when importing directly from `@chakra-ui/color-mode`
// import { ColorModeScript } from '@chakra-ui/color-mode';

console.log(ColorModeScript);
