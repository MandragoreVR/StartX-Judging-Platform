import { createStyles } from "@mantine/styles";

const useStyles = createStyles((theme, _params, getRef) => ({
    icon: { ref: getRef('icon') },

    control: {
      ref: getRef('control'),
      border: 0,
      opacity: 0.6,
      color: theme.black,

      '&:hover': {
        backgroundColor: 'transparent',
        opacity: 1,
      },
    },

    item: {
      borderBottom: 0,
      overflow: 'hidden',
      transition: `box-shadow 150ms ${theme.transitionTimingFunction}`,
      border: '1px solid transparent',
      borderRadius: "1.5em",
    },

    itemOpened: {
      backgroundColor: theme.colors.gray[0],
      borderColor: theme.colors.gray[3],

      [`& .${getRef('control')}`]: {
        opacity: 1,
      },

      [`& .${getRef('icon')}`]: {
        transform: 'rotate(45deg)',
      },
    },

    content: {
      paddingLeft: 0,
    },
}));

export default useStyles;