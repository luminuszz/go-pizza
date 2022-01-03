import { useState } from 'react';

import * as ImagePicker from 'expo-image-picker';
import {
  ImageInfo,
  ImagePickerOptions,
} from 'expo-image-picker/src/ImagePicker.types';

import strings from '@core/config/locale/strings';
import { useToast } from '@core/hooks/useToast';

type PermissionFrom = 'camera' | 'library';
type Image = ImageInfo | null;

type UsePickImageReturn = {
  pickImageFromImageLibrary: (options: ImagePickerOptions) => Promise<void>;

  pickImageFromCamera: (options: ImagePickerOptions) => Promise<void>;

  image: Image | null;
};

export function usePickImage(options?: ImagePickerOptions): UsePickImageReturn {
  const notify = useToast();
  const [imagePicked, setImagePicked] = useState<Image>(null);

  const getPermission = async (permissionFrom: PermissionFrom) => {
    const permission = {
      camera: ImagePicker.requestCameraPermissionsAsync,
      library: ImagePicker.requestMediaLibraryPermissionsAsync,
    };

    const { status } = await permission[permissionFrom]();

    return {
      hasPermission: status === ImagePicker.PermissionStatus.GRANTED,
    };
  };

  async function pickImageFromImageLibrary() {
    const { hasPermission } = await getPermission('library');

    if (!hasPermission) {
      return notify.error({
        title: strings.permissions.imageGalleryError,
      });
    }

    const imagePicked = await ImagePicker.launchImageLibraryAsync(options);

    setImagePicked(imagePicked.cancelled ? null : imagePicked);
  }

  async function pickImageFromCamera() {
    const { hasPermission } = await getPermission('camera');

    if (!hasPermission) {
      return notify.error({
        title: strings.permissions.cameraError,
      });
    }

    const imagePicked = await ImagePicker.launchCameraAsync(options);

    setImagePicked(imagePicked.cancelled ? null : imagePicked);
  }

  return {
    pickImageFromImageLibrary,
    pickImageFromCamera,
    image: imagePicked,
  };
}
