import { Styles } from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;

export const poolAddStyle = Styles.style({
  $nest: {
    '.disabled': {
      opacity: '0.5',
      pointerEvents: 'none'
    },
    '.btn-swap': {
      background: Theme.background.gradient,
      borderRadius: '0.65rem',
      color: '#fff',
      fontSize: '1.125rem',
      opacity: 1,
      padding: '1.25rem 0.75rem',
      position: 'relative',
      width: '100%',
      margin: '0.3rem 0',
      $nest: {
        '.loading-icon': {
          width: '16px !important',
          height: '16px !important',
          marginLeft: '0.25rem',
        },
        '&.disabled': {
          opacity: 0.7
        }
      },
    },
    '.btn-max': {
      display: 'inline-block',
      padding: '0.1rem 0.5rem',
      lineHeight: '20px',
      borderRadius: '5px',
      color: '#fff',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'center',
      marginLeft: '20px',
      background: Theme.background.gradient,
    },
    '.bg-transparent': {
      width: 'calc(100% - 150px) !important',
      $nest: {
        'input': {
          background: 'transparent',
          border: 'none',
          color: Theme.text.primary,
          fontSize: 20,
          width: '100% !important',
        },
        'input::placeholder': {
          color: '#8D8FA3',
        }
      }
    },
    '*': {
      boxSizing: 'border-box'
    },
    'i-icon, i-image': {
      display: 'inline-block'
    },
    '#confirmSupplyModal': {
      $nest: {
        '.modal': {
          width: 480,
          maxWidth: '95%',
          padding: '0.75rem 1rem',
          borderRadius: '1rem'
        },
        '.i-modal_header': {
          marginBottom: '1.5rem',
          paddingBottom: '0.5rem',
          borderBottom: `2px solid ${Theme.background.default}`,
          color: Theme.colors.primary.main,
          fontSize: '1.25rem',
          fontWeight: 700,
        },
        '.i-modal_header ~ i-icon': {
          display: 'inline-block',
          margin: '0.75rem 0',
          background: Theme.colors.primary.main,
          border: '2px solid transparent',
          borderRadius: '50%',
          padding: '0.25rem'
        },
        '.modal > * + *': { 
          marginTop: '1.5em'
        }
      }
    },
    '@media screen and (max-width: 480px)': {
      $nest: {
        '#pricePanel i-hstack i-label *': {
          fontSize: '0.75rem',
        }
      }
    }
  }
})
