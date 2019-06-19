import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import PropTypes from "prop-types";

export class Contact extends Component {

    render() {
        const {
            title,
            description,
            image,
            onPress,
            ...otherProps
        } = this.props;

        const onListItemTap = onPress ? onPress : undefined;

        return (
            <TouchableOpacity
                style={styles.container}
                disabled={!onListItemTap}
                onPress={onListItemTap}
                {...otherProps}
            >
                {image && (
                    <View style={styles.imageContainer}>
                        <Image {...image} style={styles.image} />
                    </View>
                )}
                <View style={styles.textContainer}>
                    <Text style={styles.headerText}>{title}</Text>
                    {description && (
                        <Text style={styles.descriptionText} >{description}</Text>
                    )}
                </View>
            </TouchableOpacity>
        );
    }
}

Contact.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.shape({
        ...Image.propTypes
    }),
    ...TouchableOpacity.propTypes
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingRight: 5,
        borderWidth: 0.5,
        borderColor: "rgba(33, 33, 33, 0.4)",
        backgroundColor: "#FFF",
    },
    textContainer: {
        flex: 3,
        flexDirection: "column",
        padding: 15,
        alignItems: "flex-start"
    },
    imageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        marginLeft: 10,
        width: 50,
        height: 50,
        borderRadius: 25
    },
    headerText: {
        fontSize: 20,
        color: "rgba(33, 33, 33, 0.87)",
        fontWeight: "bold"
    },
    descriptionText: {
        fontSize: 14,
        color: "rgba(33, 33, 33, 0.4)"
    }
});
