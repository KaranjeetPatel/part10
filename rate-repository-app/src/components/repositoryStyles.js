import { StyleSheet } from 'react-native';
import theme from '../theme';

export const repositoryStyles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.mainBackground,
      padding: 20,
    },
    
    headlineInfoContainer: {
      flexDirection: 'row',
    },
  
    headlineImage: {
      width: 75,
      height: 75,
      borderRadius: theme.borderRadius.normal,
      marginRight: 20,
    },
  
    headlineTextContainer: {
      flex: 1,
      flexDirection: 'column',
    },
  
    countsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 8,
    },
    
    count: {
      textAlign: 'center',
      flex: 1,
    }, 
    
    languageContainer: {
      marginTop: 4,
      alignItems: 'flex-start',
    },
    
    language: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.textTertiary,
      borderRadius: theme.borderRadius.normal,
      paddingVertical: 5,
      paddingHorizontal: 5,
    },

    bigButton: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.textTertiary,
      borderRadius: theme.borderRadius.normal,
      paddingVertical: 5,
      paddingHorizontal: 5,
      fontWeight: theme.fontWeights.bold,
      textAlign: 'center',
      marginBottom: 5,
    },

    ratingContainer: {
      borderColor: theme.colors.primary,
      borderWidth: 2,
      width: 75,
      height: 75,
      borderRadius: 37.5,
      marginRight: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    rating: {
      color: theme.colors.primary,
      fontWeight: 'bold',
      fontSize: 20
    },

    separator: {
      height: 10,
      borderBottomWidth: 10,
      borderBottomColor: theme.colors.borderColor,
    },

    selectMessageColor: {
      color: 'grey'
    }

  });
